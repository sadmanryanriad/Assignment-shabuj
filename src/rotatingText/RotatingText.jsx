import ReactCurvedText from "react-curved-text";
import "./RotatingText.css";
const RotatingText = () => {
  return (
    <div>
      <ReactCurvedText
        width="300"
        height="300"
        cx={150}
        cy={150}
        rx="90"
        ry="90"
        startOffset={0}
        reversed={true}
        text="dream big study abroad."
        textProps={{ style: { fontSize: "22" } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={{ className: "rotating-curved-text" }}
      />
    </div>
  );
};

export default RotatingText;
