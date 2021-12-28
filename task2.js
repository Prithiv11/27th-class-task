// task 2
const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
     },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
const allmarks = scores.map((mark)=>mark.marks);
const maxmark=Math.max(...allmarks);
const topper = scores.filter((score)=>score.marks==maxmark);
console.log(topper[0].name);