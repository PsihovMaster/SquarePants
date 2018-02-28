  function squarePants() {
    var a = parseInt(document.forms.foo.a.value);
    var b = parseInt(document.forms.foo.b.value);
    var c = parseInt(document.forms.foo.c.value);
    var d = b * b - 4 * a * c;
    document.forms.foo.dis.value = d;
    if (d < 0) {
      var str = "";
      str += (-b) / (2 * a);
      str += " + i * ";
      str += Math.sqrt(-d) / (2 * a);
      document.forms.foo.x1.value = str;
      str = "";
      str += (-b) / (2 * a);
      str += " - i * ";
      str += Math.sqrt(-d) / (2 * a);
      document.forms.foo.x2.value = str;
    }
    else {
      document.forms.foo.x1.value = (-b + Math.sqrt(d)) / (2 * a);
      document.forms.foo.x2.value = (-b - Math.sqrt(d)) / (2 * a);
    }
  }
  