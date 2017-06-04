/**
 * Controller methods for the home page.
 * @type {Object}
 */
module.exports = {
  /**
   * Renders a basic homepage.
   * @param  {obj} req Request object
   * @param  {obj} res Response object
   */
  home: function(req, res)  {
    res.render('main');
  }
}
