import { useState } from 'react';
import { AppButton } from '../../../shared/index';

export const Button = () => {
  const [loading, setLoading] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
  });

  const toggleLoading = (btn) => () => {
    setLoading((prev) => ({ ...prev, [btn]: true }));
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [btn]: false }));
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 mb-5">
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-2">
            <h1>Default</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton label="Button" />
              <AppButton label="Disabled" disabled={true} />
            </div>
          </div>
          <div className="card flex flex-col gap-2">
            <h1>Types</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton label="Primary" type="primary" />
              <AppButton label="Secondary" type="secondary" />
              <AppButton label="Success" type="success" />
              <AppButton label="Info" type="info" />
              <AppButton label="Warn" type="warn" />
              <AppButton label="Help" type="help" />
              <AppButton label="Danger" type="danger" />
              <AppButton label="Contrast" type="contrast" />
              <AppButton label="Disabled" type="primary" disabled={true} />
              <AppButton label="Disabled" type="secondary" disabled={true} />
              <AppButton label="Disabled" type="success" disabled={true} />
              <AppButton label="Disabled" type="info" disabled={true} />
              <AppButton label="Disabled" type="warn" disabled={true} />
              <AppButton label="Disabled" type="help" disabled={true} />
              <AppButton label="Disabled" type="danger" disabled={true} />
              <AppButton label="Disabled" type="contrast" disabled={true} />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="card flex flex-col gap-2">
            <h1>Outlined</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton label="Primary" type="primary" outlined={true} />
              <AppButton label="Secondary" type="secondary" outlined={true} />
              <AppButton label="Success" type="success" outlined={true} />
              <AppButton label="Info" type="info" outlined={true} />
              <AppButton label="Warn" type="warn" outlined={true} />
              <AppButton label="Help" type="help" outlined={true} />
              <AppButton label="Danger" type="danger" outlined={true} />
              <AppButton label="Contrast" type="contrast" outlined={true} />
              <AppButton label="Primary" type="primary" outlined={true} disabled={true} />
              <AppButton label="Secondary" type="secondary" outlined={true} disabled={true} />
              <AppButton label="Success" type="success" outlined={true} disabled={true} />
              <AppButton label="Info" type="info" outlined={true} disabled={true} />
              <AppButton label="Warn" type="warn" outlined={true} disabled={true} />
              <AppButton label="Help" type="help" outlined={true} disabled={true} />
              <AppButton label="Danger" type="danger" outlined={true} disabled={true} />
              <AppButton label="Contrast" type="contrast" outlined={true} disabled={true} />
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
              <AppButton label="Secondary" type="secondary" rounded={true} disabled={true} />
              <AppButton label="Success" type="success" rounded={true} disabled={true} />
              <AppButton label="Info" type="info" rounded={true} disabled={true} />
              <AppButton label="Warn" type="warn" rounded={true} disabled={true} />
              <AppButton label="Help" type="help" rounded={true} disabled={true} />
              <AppButton label="Danger" type="danger" rounded={true} disabled={true} />
              <AppButton label="Contrast" type="contrast" rounded={true} disabled={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="card flex flex-col gap-5 w-full md:w-1/2">
          <h1>Raised</h1>
          <div className="flex flex-wrap gap-3">
            <AppButton label="Raised" type="primary" raised={true} />
          </div>
        </div>
        <div className="card flex flex-col gap-5 w-full md:w-1/2">
          <div>Icon</div>
          <div className="flex flex-wrap gap-3">
            <AppButton type="success" rounded={true} icon="pi pi-check" outlined={true} />
            <AppButton type="secondary" rounded={true} icon="pi pi-bookmark" outlined={true} />
            <AppButton type="success" rounded={true} icon="pi pi-search" outlined={true} />
            <AppButton type="info" rounded={true} icon="pi pi-user" outlined={true} />
            <AppButton type="warn" rounded={true} icon="pi pi-bell" outlined={true} />
            <AppButton type="help" rounded={true} icon="pi pi-heart" outlined={true} />
            <AppButton type="danger" rounded={true} icon="pi pi-times" outlined={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="card flex flex-col gap-5 w-full md:w-1/2">
          <h1 onClick={() => console.log(12)}>Loading</h1>
          <div className="flex flex-wrap gap-3">
            <AppButton
              label="Search"
              type="primary"
              loading={loading.btn1}
              onClick={toggleLoading('btn1')}
            />
            <AppButton
              label="Search"
              type="success"
              icon="pi pi-circle"
              loading={loading.btn2}
              onClick={toggleLoading('btn2')}
            />
            <AppButton
              label="Search"
              icon="pi pi-search"
              direction="rtl"
              type="help"
              loading={loading.btn3}
              onClick={toggleLoading('btn3')}
            />
            <AppButton
              type="warn"
              icon="pi pi-search"
              direction="rtl"
              outlined={true}
              loading={loading.btn4}
              onClick={toggleLoading('btn4')}
            />
            <AppButton
              type="success"
              rounded={true}
              icon="pi pi-check"
              outlined={true}
              loading={loading.btn1}
              onClick={toggleLoading('btn1')}
            />
            <AppButton
              type="secondary"
              rounded={true}
              icon="pi pi-bookmark"
              outlined={true}
              loading={loading.btn2}
              onClick={toggleLoading('btn2')}
            />
            <AppButton
              type="success"
              rounded={true}
              icon="pi pi-search"
              outlined={true}
              loading={loading.btn3}
              onClick={toggleLoading('btn3')}
            />
            <AppButton
              type="info"
              rounded={true}
              icon="pi pi-user"
              outlined={true}
              loading={loading.btn4}
              onClick={toggleLoading('btn4')}
            />
          </div>
        </div>
      </div>
    </>
  );
};
