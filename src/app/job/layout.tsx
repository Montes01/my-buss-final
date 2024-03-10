import Header from "../home/shared/Header"
import Footer from "../shared/Footer/Footer"

interface Props {

    children: React.ReactNode
}
import { Provider } from "react-redux";
import { store } from "../../lib/context/store";

export default function Layout({ children }: Props) {
    return (
        <Provider store={store}>
            <Header />
            {children}
            <Footer />
        </Provider>
    );
}