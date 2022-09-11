let util = {
  callApi: async function (apiCall, params, options) {
    let res=null, err=null
    try {
      res = await apiCall(params, options);
    } catch (error) {
      // console.log(error);
      err = error?.response?.data?.err || error?.response?.data?.message || error?.message;
    }
    // console.log(res, err);
    return [res, err]
  }
}

export default util;