
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <SectionTittle heading="Payment" subHeading="Please Pay For Eat"></SectionTittle>
            <div>
                <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;