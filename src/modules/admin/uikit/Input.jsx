import { useState } from 'react';
import { InputText, IconFeild, InputIcon, FloatLabel } from '../../../shared/index';
import { Textarea } from '../../../shared/components/input/Textarea';
export const Input = () => {
  const [firstName, setFirstName] = useState();

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-5">
            <h1 className="text-xl">Input Text</h1>
            <div className="flex md:flex-row gap-4 ">
              <InputText
                placeholder="Default"
                className="e-input-text-fluid"
                value={setFirstName}
              />
              <InputText placeholder="Disabled" className="e-input-text-fluid" disabled={true} />
              <InputText placeholder="Invalid" className="e-input-text-fluid" invalid={true} />
            </div>
          </div>
          <div className="card flex flex-col gap-5">
            <h1 className="text-xl">Icon</h1>
            <div className="flex flex-col gap-4">
              <IconFeild>
                <InputIcon icon="pi pi-user"></InputIcon>
                <InputText placeholder="User" className="e-input-text-fluid" />
              </IconFeild>
              <IconFeild>
                <InputIcon icon="pi pi-building"></InputIcon>
                <InputText placeholder="City" className="e-input-text-fluid p-5" />
              </IconFeild>
              <IconFeild>
                <InputIcon icon="pi pi-home"></InputIcon>
                <InputText placeholder="Home" className="e-input-text-fluid p-5" />
              </IconFeild>
              <IconFeild>
                <InputText placeholder="Search" className="e-input-text-fluid p-5" />
                <InputIcon icon="pi pi-search"></InputIcon>
              </IconFeild>
            </div>
          </div>
          <div className="card flex flex-col gap-5">
            <div className="text-xl">Float Label</div>
            <div className="flex flex-col gap-5">
              <FloatLabel>
                <InputText id="username" className="w-full"></InputText>
                <label htmlFor="">Username</label>
              </FloatLabel>
            </div>
          </div>
          <div className="card flex flex-col gap-5">
            <div className="text-xl">Textarea</div>
            <div className="flex flex-col">
              <Textarea placeholder="Message" className="w-full" cols="3" rows="3"></Textarea>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-5">
            <h1 className="text-xl">Input</h1>
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
