const isRightTriangle = (a, b, c) => {
  function CheckRightTriangle(a,b,c) {
    if ((a+b>c || a+c>b || b+c>a) && a > 0 && b > 0 && c > 0) {
      if ((Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)) || (Math.pow(a,2)+Math.pow(c,2)===Math.pow(b,2)) || (Math.pow(b,2)+Math.pow(c,2)===Math.pow(a,2))) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return 'Please enter the side lengths of a triangle.';
    }
  }
  console.log(CheckRightTriangle(a,b,c));

};
isRightTriangle(1,0,1);
module.exports = isRightTriangle;
