import Container from "./Container";

function NavTab({ children, ...props }) {
  return (
    <div className="pt-2 shadow-md bg-white" {...props}>
      <Container>
        <div className="flex gap-2">{children}</div>
      </Container>
    </div>
  );
}

export default NavTab;
