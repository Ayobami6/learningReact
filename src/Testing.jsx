import { useState } from 'react';

export default function Testing() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked(!checked)}
          id="checked"
        />
        <label htmlFor="checked">{checked ? 'checked' : 'not checked'}</label>
      </div>
    </>
  );
}
