/**
 * Controller methods for the sources page.
 * @type {Object}
 */
module.exports = {
  /**
   * Renders a sources page.
   * @param  {obj} req Request object
   * @param  {obj} res Response object
   */
  home: function(req, res)  {
    res.render('sources');
  }
}
