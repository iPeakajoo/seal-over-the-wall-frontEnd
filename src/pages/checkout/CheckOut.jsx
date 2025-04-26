
import React from 'react';
import CheckoutStepper from "./CheckoutStepper";
import CheckoutShipping from './CheckoutShipping';
import CheckoutPaymentCard from './CheckoutPaymentCard';
import CheckoutSummary from './CheckoutSummary';
import CheckoutSuccess from './CheckoutSuccess';


function CheckOut() {
  const [step, setStep] = React.useState(0);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleReset = () => setStep(0);

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <CheckoutShipping onNext={handleNext} />;
      case 1:
        return <CheckoutPaymentCard onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <CheckoutSummary onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <CheckoutSuccess onReset={handleReset} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <CheckoutStepper step={step} />
      {renderStepContent()}
    </div>
  );
}

export default CheckOut;