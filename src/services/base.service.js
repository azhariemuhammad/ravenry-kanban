import createRestApiClient from '../utils/createRestApiClient';

const apiEndpoint = "http://5bdea7dd7ad6890013e9c2b5.mockapi.io/api/v1"

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    // getSomething: () => client.request({
    //   method: 'GET',
    //   url: '/something'
    // }),
    // createSomething: ({ name }) => client.request({
    //   method: 'POST',
    //   url: `/somthing`,
    //   data: {
    //     name
    //   }
    // })
  };
};
