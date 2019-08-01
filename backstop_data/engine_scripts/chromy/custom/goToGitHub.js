module.exports = function (chromy) {
    chromy
      .wait("body > div > div:nth-child(3) > p:nth-child(3) > span:nth-child(1) > a")
      .click("body > div > div:nth-child(3) > p:nth-child(3) > span:nth-child(1) > a")
      .wait(".js-header-wrapper")
  };