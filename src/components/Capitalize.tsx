export const CapitalizedText = ({ text }: { text: string }) => {
  return text.split("").map((char, index) => {
    if (char === char.toUpperCase() && char.match(/[A-Z]/i)) {
      return (
        <span key={index} className="text-[1.25em]">
          {char}
        </span>
      );
    }
    return char;
  });
};
