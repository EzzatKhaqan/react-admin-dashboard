import { AppButton } from '../../../shared/index';

export const Button = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 mb-5">
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-2">
            <h1>Default</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton label="Button" />
              <AppButton label="Disabled" disabled={true} />
              <AppButton label="Primary" type="primary" />
            </div>
          </div>
          <div className="card flex flex-col gap-2">
            <h1>Types</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton label="Disabled" type="primary" disabled={true} />
              <AppButton label="Primary" type="primary" />
              <AppButton label="Secondary" type="secondary" />
              <AppButton label="Disabled" type="secondary" disabled={true} />
              <AppButton label="Success" type="success" />
              <AppButton label="Disabled" type="success" disabled={true} />
              <AppButton label="Info" type="info" />
              <AppButton label="Disabled" type="info" disabled={true} />
              <AppButton label="Warn" type="warn" />
              <AppButton label="Disabled" type="warn" disabled={true} />
              <AppButton label="Help" type="help" />
              <AppButton label="Disabled" type="help" disabled={true} />
              <AppButton label="Danger" type="danger" />
              <AppButton label="Disabled" type="danger" disabled={true} />
              <AppButton label="Contrast" type="contrast" />
              <AppButton label="Disabled" type="contrast" disabled={true} />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-2">
            <h1>Outlined</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton label="Secondary" type="secondary" outlined={true} />
              <AppButton label="Success" type="success" outlined={true} />
              <AppButton label="Info" type="info" outlined={true} />
              <AppButton label="Warn" type="warn" outlined={true} />
              <AppButton label="Help" type="help" outlined={true} />
              <AppButton label="Danger" type="danger" outlined={true} />
              <AppButton label="Contrast" type="contrast" outlined={true} />
            </div>
          </div>
          <div className="card flex flex-col gap-2">
            <h1>Rounded</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton label="Secondary" type="secondary" rounded={true} />
              <AppButton label="Success" type="success" rounded={true} />
              <AppButton label="Info" type="info" rounded={true} />
              <AppButton label="Warn" type="warn" rounded={true} />
              <AppButton label="Help" type="help" rounded={true} />
              <AppButton label="Danger" type="danger" rounded={true} />
              <AppButton label="Contrast" type="contrast" rounded={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="card flex flex-col gap-5 w-full md:w-1/2">
          <h1>Loading</h1>
          <div>
            <AppButton label="Loading" />
          </div>
        </div>
        <div className="card flex flex-col gap-5 w-full md:w-1/2">
          <div>Icon</div>
          <div>
            <AppButton label="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
