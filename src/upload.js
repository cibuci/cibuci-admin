import 'whatwg-fetch';
import uuidV4 from 'uuid/v4';

function generateKey(resource, id, field) {
  return `community/${resource}/${id}/${field}/${uuidV4()}`;
}

function fetchUptoken(data, key) {
  const url = `https://api.cibuci.com/util/qiniu/token?file_name=${key}`;

  return fetch(url)
    .then(function(response) {
      return response.json()
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });
}

function uploadFile(uptoken, key, params) {
  const url = 'https://up-z1.qbox.me';
  const file = params.data.cover[0];

  const data = new FormData();
  data.append('file', file);
  data.append('token', uptoken);
  data.append('key', key);

  return fetch(url, {
    method: 'POST',
    body: data
  })
    .then(function(response) {
      return response.json();
    })
    .then(function({ key }) {
      return {
        cover: `http://cdn-qn0.cibuci.com/${key}`,
      };
    });
}

/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadCapabilities = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE') {

      switch (resource) {
        case 'articles': {
          if (params.data.cover && params.data.cover.length) {
            if (typeof params.data.cover === 'string') {
              return requestHandler(type, resource, params);
            }

            const key = generateKey('article', params.data.id, 'cover');
            return fetchUptoken(params.data, key)
              .then(function({ token }) {
                return uploadFile(token, key, params);
              })
              .then(cover => requestHandler(type, resource, {
                  ...params,
                  data: {
                    ...params.data,
                    ...cover
                  },
              }));
          }
          break;
        }
        default:
          break;
      }
    }

    return requestHandler(type, resource, params);
};

export default addUploadCapabilities;
