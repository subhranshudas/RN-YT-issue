export function parseApiResponse(
    response
  ) {
    return response.map((apiNotification) => {
      const {
        payload: {
          data: {
            acta: cta = "",
            amsg: bigMessage = "",
            asub = "",
            icon = "",
            url = "",
            sid = "",
            app = "",
            aimg = "",
            secret = ""
          },
          notification,
        },
        blockchain,
      } = apiNotification;
  
      return {
        cta,
        title: asub || notification.title || '',
        message: bigMessage || notification.body || '',
        icon,
        url,
        sid,
        app,
        image: aimg,
        blockchain,
        notification,
        secret
      };
    });
  }