function isTouching(p1 , p2) {
    if (p1.y - p2.y <p2.height/2 + p1.height/2
       && p2.y - p1.y < p2.height/2 +p1.height/2) {
     
         return true;
   }
   else {
    return false ;
   }
     
   }