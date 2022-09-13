import { f7 } from "framework7-vue";

let util = {
  callApi: async function (apiCall, params, options) {
    f7.preloader.show('#ef223c');
    let res=null, err=null
    try {
      res = await apiCall(params, options);
    } catch (error) {
      // console.log(error);
      err = error?.response?.data?.err || error?.response?.data?.message || error?.message;
    }
    await(new Promise(resolve => setTimeout(resolve, 300)));
    f7.preloader.hide();
    // console.log(res, err);
    return [res, err]
  }
}

export default util;