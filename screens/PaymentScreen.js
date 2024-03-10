import React, {useState} from "react";
import {
    CardField,
    CardFieldInput,
    useStripe,
    StripeProvider,
  } from '@stripe/stripe-react-native';

  export default PaymentScreen = () => {
    const [card, setCard] = useState(CardFieldInput.Details | null);
    const {confirmPayment, handleCardAction} = useStripe()
    return(
        <StripeProvider
            publishableKey="pk_test_51OoPMcSCTcFX1CQMtUkWIjaxEix8AmJNCsX8JcH6mBHNflvlyfPzBiZlGf8JvteqBChsS4YnOqhQrgxMpugX8bMV005Yk56gBC"
        >
        <CardField
      postalCodeEnabled={true}
      placeholder={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        setCard(cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
    </StripeProvider>
    )
  }