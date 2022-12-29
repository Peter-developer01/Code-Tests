export default function App() {
   return (
      <>
         <Heading props="1">$("selector").text("textString");</Heading>
      </>
   );
}

function Heading(props) {
   try {
      return <h1>{props}</h1>;
   } catch (error) {
      return <p>Непредвиденная ошибка.</p>
   }
}