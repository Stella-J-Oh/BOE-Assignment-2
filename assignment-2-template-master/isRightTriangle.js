const isRightTriangle = (a, b, c) => {
    if ((a+b>c || a+c>b || b+c>a) && a > 0 && b > 0 && c > 0) {
      if ((Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)) || (Math.pow(a,2)+Math.pow(c,2)===Math.pow(b,2)) || (Math.pow(b,2)+Math.pow(c,2)===Math.pow(a,2))) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      console.log('Please enter the side lengths of a triangle.');
  }

};
module.exports = isRightTriangle;
