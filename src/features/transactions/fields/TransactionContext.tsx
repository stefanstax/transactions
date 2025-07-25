import { formDiv, input, labelClasses } from "../../../app/globalClasses";
import FormError from "../../../components/FormError";
import {
  transactionContexts,
  type TransactionContexts,
} from "../types/transactionTypes";

const TransactionContext = ({
  context,
  setContext,
  validationError,
}: {
  context: string;
  setContext: (value: TransactionContexts) => void;
  validationError?: string;
}) => {
  return (
    <div className={formDiv}>
      <label className={labelClasses} htmlFor="variant">
        Transaction Context
      </label>
      <div className={`${input} flex flex-wrap gap-2`}>
        {transactionContexts.map((option) => {
          return (
            <button
              key={option.name}
              type="button"
              className={`cursor-pointer text-sm font-[600] min-w-[100px] rounded-full border-1 border-solid border-black px-4  py-2 ${
                option.name === context
                  ? "bg-gray-950 text-white border-black"
                  : ""
              }`}
              onClick={() => setContext(option.name as TransactionContexts)}
            >
              {option.name}
            </button>
          );
        })}
        <input type="hidden" value={context ?? ""} name="context" />
      </div>
      {validationError && <FormError fieldError={validationError} />}
    </div>
  );
};

export default TransactionContext;
