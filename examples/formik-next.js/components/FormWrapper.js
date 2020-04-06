function FormWrapper({
    children,
    isLastStep,
    status,
    goToPreviousStep,
    canGoBack,
    actionLabel,
  }) {
    let disabled = !canGoBack ? "cursor-not-allowed bg-gray-200" : "font-bold bg-gray-300 hover:bg-gray-400"
    let btnClassName = disabled + " text-gray-800 py-2 px-4 rounded-l"
    return (
      <div className="container mx-auto">
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
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="submit">
            {actionLabel || (isLastStep ? 'Submit' : 'Next step')}
          </button>
        </div>
      </div>
    )
  }

  export default FormWrapper;