export default function ({ $cookies }) {
    if (process.client) {
      const token = $cookies.get('XSRF-TOKEN')
      if (token) {
        $cookies.set('XSRF-TOKEN', token, {
          sameSite: 'None',
          secure: true,
        })
      }
    }
  }
  