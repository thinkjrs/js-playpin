function FormWrapper({
    children,
    isLastStep,
    status,
    goToPreviousStep,
    canGoBack,
    actionLabel,
  }) {
    let disabled = !canGoBack ? "cursor-not-allowed bg-gray-200" : "font-bold bg-gray-300 hover:bg-gray-400"
    let btnClassName = disabled + " text-gray-800 w-40 rounded-l py-2"
    return (
      <div>
        {status && (
          <div>
            {status.message}
          </div>
        )}
       {children}
        <div>
          <button className={btnClassName}  type="button" onClick={goToPreviousStep} disabled={!canGoBack}>
            Previous
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 w-40 text-gray-800 font-bold py-2 rounded-r" type="submit">
            {actionLabel || (isLastStep ? 'Submit ' : 'Next')}
          </button>
        </div>
      </div>
    )
  }

  export default FormWrapper;