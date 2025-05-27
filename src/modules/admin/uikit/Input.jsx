import { useState } from 'react';
import { InputText, ValidationRoules } from '../../../shared/index';

export const Input = () => {
  const [firstName, setFirstName] = useState();

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-5">
            <h1>Input Text</h1>
            <div className="flex md:flex-row gap-4 ">
              <InputText
                placeholder="Default"
                className="e-input-text-fluid"
                value={setFirstName}
              />
              <InputText placeholder="Disabled" className="e-input-text-fluid" disabled={true} />
              <InputText placeholder="Invalid" className="e-input-text-fluid" invalid={true} />
            </div>
            <h1>Icon</h1>
            <div className="flex md:flex-row gap-4 ">
              <InputText placeholder="Default" className="e-input-text-fluid" />
              <InputText placeholder="Disabled" className="e-input-text-fluid" disabled={true} />
              <InputText placeholder="Invalid" className="e-input-text-fluid" invalid={true} />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-5">
            <h1>Input</h1>
            <div className="flex flex-wrap gap-4">
              <InputText placeholder="Input Text" />
              <InputText placeholder="Input Text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
