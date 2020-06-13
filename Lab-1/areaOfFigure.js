function Area(w, h, W, H) {
    var fig1 = w * h;
    var fig2 = W * H;
    var fig3 = Math.min(w, W) * Math.min(h, H);
    console.log("Area of common fig is: "+(fig1+fig2-fig3));
}
Area('2', '4', '5', '3');
Area('13', '2', '5', '8');