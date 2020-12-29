AFRAME.registerComponent("move", {
    schema: {
      moveY: {type: "number", default:1}
    },
   
      tick:function(){
var pose=this.el.getAttribute("position")
this.data.moveY=this.data.moveY+0.01
pose.y=this.data.moveY
this.el.setAttribute("position",{x:pose.x,y:pose.y,z:pose.z})
      }
  });