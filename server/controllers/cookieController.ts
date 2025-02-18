import { CookieController } from '../interfaces';

const cookieController: CookieController = {
  /**
   * Middleware function to set the 'ssid' and 'username' cookies.
   *
   * @callback SetSSIDCookieMiddleware
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @param {Function} next - The next middleware function in the stack.
   * @returns {void}
   */
  setSSIDCookie: (req, res, next): void => {
    // set cookie with key 'ssid' and value to user's id

    res.cookie('ssid', res.locals.id, {
      httpOnly: true,
      //sameSite: 'none',
      secure: false // this was the whole issue, because people were testing this in a dev port which is HTTP, but auto-trusted, then we switched to an aws url which is not auto trusted.
      //maxAge: 60 * 60 * 1000 * 24  //uncomment to set expiration of cookies, but make sure there is something in place to expire local storage info too
    });

    res.cookie('username', res.locals.username, {
      httpOnly: true,
      //sameSite: 'none',
      secure: false // again, this only works if you are HTTPS or on dev port
    });
    return next();
  },
  /**
   * Middleware function to delete cookies.
   *
   * @callback DeleteCookiesMiddleware
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @param {Function} next - The next middleware function in the stack.
   * @returns {void}
   */
  deleteCookies: (req, res, next): void => {
    res.clearCookie('ssid');
    res.clearCookie('username');
    res.clearCookie('connect.sid');
    return next();
  }
};

export default cookieController;
