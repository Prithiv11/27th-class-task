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
const marks = scores.map((score)=> score.marks);
const sum=marks.reduce((sum,cur)=> sum+cur);
const students=scores.length;
const avg = sum/students;
console.log(avg.toFixed(3));