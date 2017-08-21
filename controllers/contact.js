/**
 * Controller methods for the contact page.
 * @type {Object}
 */
module.exports = {
  /**
   * Renders a contact page.
   * @param  {obj} req Request object
   * @param  {obj} res Response object
   */
  home: function(req, res)  {
    res.render('contact');
  }
}
