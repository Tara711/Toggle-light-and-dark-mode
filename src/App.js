import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe
        blanditiis quisquam, molestias eum minima iusto sed voluptatem corporis
        illo velit, numquam voluptatum ullam enim qui quam nostrum optio?
        Ducimus deserunt, aperiam sequi minima necessitatibus amet dolore. In
        accusantium placeat voluptates neque soluta quaerat laudantium nesciunt
        totam atque quis sunt, odio optio fugit possimus, sed dicta, illo
        eligendi consequatur quasi cum quo. Fuga iste nesciunt iusto. Ut, natus
        neque aspernatur corporis harum aut pariatur totam eligendi autem
        perferendis nisi. Nostrum aspernatur optio tenetur non, eum facere,
        consequuntur autem eaque soluta sequi vitae animi at rem quam ipsa sunt
        fugiat! Doloremque.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Hello, Everyone</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>Introduce Yourself</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
