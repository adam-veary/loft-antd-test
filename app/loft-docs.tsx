// @ts-nocheck
'use client';

import React, { useRef } from 'react';

export default function LoftDocs() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const slideoverRef = useRef<HTMLDialogElement>(null);
  const filePreviewRef = useRef<HTMLDialogElement>(null);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      <h2 style={{ marginBottom: '20px' }}>HTML Loft Components</h2>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Alert</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <div className="flex flex-col gap-3">
          <l-alert kind="primary">Primary</l-alert>
          <l-alert kind="warning">Warning</l-alert>
          <l-alert kind="danger">Danger</l-alert>
          <l-alert kind="success">Success</l-alert>
          <l-alert kind="purple">Purple</l-alert>
        </div>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Toast</h4>
        <l-alert kind="success" toast="hide">
          Toast
        </l-alert>
        <button
          kind="primary"
          onClick={() => {
            const toast = document.querySelector('l-alert[toast="hide"]');
            if (toast) {
              toast.setAttribute('toast', 'show');
              setTimeout(() => toast.setAttribute('toast', 'hide'), 3000);
            }
          }}
        >
          Show Toast
        </button>
        <h4 style={{ marginBottom: '20px', marginTop: '28px' }}>
          Close Button
        </h4>
        <l-alert>
          Dismiss this alert{' '}
          <button
            slot="close"
            title="Dismiss"
            aria-label="Dismiss"
            onClick={e => {
              e.currentTarget.parentElement?.remove();
            }}
          ></button>
        </l-alert>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Badge</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-badge count="8"></l-badge>
        <h4 style={{ marginBottom: '20px', marginTop: '28px' }}>No Count</h4>
        <l-badge></l-badge>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Truncated count
        </h4>
        <l-badge count="99+"></l-badge>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Kind</h4>
        <l-badge count="8"></l-badge>
        <l-badge count="8" kind="primary"></l-badge>
        <l-badge count="8" kind="neutral"></l-badge>
        <l-badge count="8" kind="danger"></l-badge>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Placement</h4>
        <p className="pos-relative">
          <l-icon name="calendar"></l-icon>
          <l-badge count="99+"></l-badge>
        </p>
        <p className="pos-relative">
          <l-icon name="calendar"></l-icon>
          <l-badge></l-badge>
        </p>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Other components, like button
        </h4>
        <button kind="neutral">
          <span>Label</span>
          <l-badge count="8"></l-badge>
        </button>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Breadcrumbs</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-breadcrumbs>
          <nav>
            <a href="/">Dashboard</a>
            <a href="/quotes/">Quotes</a>
            <a href="/quotes/Q82-2746-9645" aria-current="page">
              Q82-2746-9645
            </a>
          </nav>
        </l-breadcrumbs>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Current page
        </h4>
        <l-breadcrumbs>
          <nav>
            <a href="/">Home</a>
            <a href="/path-to-here" aria-current="page">
              You are here
            </a>
          </nav>
        </l-breadcrumbs>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Button</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <div className="flex flex-wrap gap-2">
          <button kind="primary">Primary</button>
          <button kind="primary-outline">Primary Outline</button>
          <button kind="primary-text">Primary Text</button>
          <button kind="neutral">Neutral</button>
          <button kind="neutral-text">Neutral Text</button>
          <button kind="danger">Danger</button>
          <button kind="danger-outline">Danger Outline</button>
          <button kind="danger-text">Danger Text</button>
          <button kind="angle" direction="left" aria-label="Previous"></button>
          <button kind="angle" direction="right" aria-label="Next"></button>
        </div>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Disabled</h4>
        <div className="flex flex-wrap gap-2">
          <button kind="primary" disabled>
            Disabled
          </button>
        </div>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Loading</h4>
        <button kind="primary" disabled>
          <l-loader kind="flow" role="progressbar"></l-loader>
        </button>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Size</h4>
        <button kind="primary" scale="small">
          Small
        </button>
        <button kind="primary">Medium (Default)</button>
        <button kind="primary" scale="large">
          Large
        </button>
        <button kind="primary" scale="xlarge">
          X-Large
        </button>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>With Icon</h4>
        <div className="flex flex-wrap gap-2">
          <button kind="primary">
            <l-icon name="download"></l-icon>
            Primary with Icon
          </button>
          <button kind="secondary">
            <l-icon name="edit"></l-icon>
            Secondary with Icon
          </button>
          <button kind="neutral">
            <l-icon name="check"></l-icon>
            Neutral with Icon
          </button>
          <button kind="primary" title="Search" aria-label="Search">
            <l-icon name="magnifying-glass"></l-icon>
          </button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Chip</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <div className="flex flex-wrap gap-2">
          <l-chip>Default</l-chip>
          <l-chip kind="primary">Primary</l-chip>
          <l-chip kind="primary-solid">Primary Solid</l-chip>
          <l-chip kind="primary-outline">Primary Outline</l-chip>
          <l-chip kind="success">Success</l-chip>
          <l-chip kind="success-solid">Success Solid</l-chip>
          <l-chip kind="danger">Danger</l-chip>
          <l-chip kind="danger-solid">Danger Solid</l-chip>
          <l-chip kind="danger-outline">Danger Outline</l-chip>
          <l-chip kind="warning">Warning</l-chip>
          <l-chip kind="warning-solid">Warning Solid</l-chip>
          <l-chip kind="neutral">Neutral</l-chip>
          <l-chip kind="purple">Purple</l-chip>
          <l-chip kind="purple-solid">Purple Solid</l-chip>
        </div>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Close Button
        </h4>
        <div className="flex flex-wrap gap-2">
          <l-chip kind="purple">
            Dismissible
            <button
              slot="close"
              title="Remove"
              aria-label="Remove"
              onClick={e => {
                e.currentTarget.parentElement?.remove();
              }}
            ></button>
          </l-chip>
          <l-chip kind="blue">
            Dismissible
            <button
              slot="close"
              title="Remove"
              aria-label="Remove"
              onClick={e => {
                e.currentTarget.parentElement?.remove();
              }}
            ></button>
          </l-chip>
          <l-chip kind="green">
            Dismissible
            <button
              slot="close"
              title="Remove"
              aria-label="Remove"
              onClick={e => {
                e.currentTarget.parentElement?.remove();
              }}
            ></button>
          </l-chip>
        </div>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Choice</h4>
        <div role="group" aria-label="Choices group">
          <l-chip>
            Choice 1{' '}
            <input
              onChange={() => {}}
              slot="choice"
              type="radio"
              name="choices"
              value="1"
            />
          </l-chip>
          <l-chip>
            Choice 2{' '}
            <input
              onChange={() => {}}
              slot="choice"
              type="radio"
              name="choices"
              value="2"
            />
          </l-chip>
          <l-chip>
            Choice 3{' '}
            <input
              onChange={() => {}}
              slot="choice"
              type="radio"
              name="choices"
              value="3"
              disabled
            />
          </l-chip>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Container</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-container>
          <p>This is content inside a container component.</p>
        </l-container>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>With panel</h4>
        <l-container>
          <l-panel>Content in a panel and panel in a container.</l-panel>
        </l-container>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Details</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Accordion</h4>
        <details kind="accordion">
          <summary>Title 1</summary>
          <button>Content button</button>
          <a href="/">Content link</a>
        </details>
        <details kind="accordion">
          <summary>Title 2</summary>
          <button>Content button</button>
          <a href="/">Content link</a>
        </details>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Collapse</h4>
        <details kind="collapse">
          <summary>Label</summary>
          <button>Button</button>
          <a href="/">Link</a>
        </details>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Dialog</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <dialog ref={dialogRef}>
          <button
            slot="close"
            aria-label="Close dialog"
            onClick={() => dialogRef.current?.close()}
          ></button>
          Press <code>Esc</code> key to close
        </dialog>
        <button onClick={() => dialogRef.current?.showModal()} kind="primary">
          Open Dialog
        </button>
        <dialog kind="slideover" ref={slideoverRef}>
          Press <code>Esc</code> key to close
        </dialog>
        <button
          onClick={() => slideoverRef.current?.showModal()}
          kind="primary"
        >
          Open Slideover
        </button>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Dropdown</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-dropdown>
          <button kind="primary" aria-controls="dropdown-basic">
            Open Dropdown
          </button>
          <div id="dropdown-basic" slot="popover">
            <p className="txt-nowrap">Build something in popover slot.</p>
            <button kind="primary" scale="small">
              Button
            </button>
          </div>
        </l-dropdown>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Menu Options
        </h4>
        <l-dropdown tabindex="0">
          <button
            kind="primary"
            aria-controls="dropdown-menu"
            aria-haspopup="menu"
          >
            Open Menu
          </button>
          <div id="dropdown-menu" slot="popover" role="menu">
            <button role="menuitem">Button</button>
            <hr />
            <a href="/" role="menuitem">
              Link
            </a>
            <a href="/" role="menuitem">
              Link
            </a>
          </div>
        </l-dropdown>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>
          File Preview
        </h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-filepreview>
          <a href="assets/logo-xom-color-short.png" target="_blank" slot="name">
            logo-xom-color-short.png
          </a>
          <div slot="size">5.9kb</div>
        </l-filepreview>
        <l-filepreview>
          <a href="assets/logo-xom-color-short.png" download="" slot="name">
            logo-xom-color-short.png
          </a>
          <div slot="size">5.9kb</div>
        </l-filepreview>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Image Preview
        </h4>
        <l-filepreview>
          <img
            src="https://xometry.github.io/loft/assets/logo-xom-color-short.png"
            alt="Xometry logo"
          />
          <div slot="name">logo-xom-color-short.png</div>
          <div slot="size">5.9kb</div>
        </l-filepreview>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Full Size Image Preview
        </h4>
        <l-filepreview detailview="">
          <img
            onClick={() => filePreviewRef.current?.showModal()}
            src="https://xometry.github.io/loft/assets/logo-xom-color-short.png"
            alt="Xometry logo"
          />
          <div slot="name">logo-xom-color-short.png</div>
          <div slot="size">5.9kb</div>
        </l-filepreview>
        <dialog ref={filePreviewRef}>
          <button
            slot="close"
            aria-label="Close file preview"
            onClick={() => filePreviewRef.current?.close()}
          ></button>
          <h2>logo-xom-color-short.png</h2>
          <img
            src="https://xometry.github.io/loft/assets/logo-xom-color-short.png"
            alt="Xometry logo"
          />
        </dialog>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>File Upload</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-fileupload>
          <label htmlFor="upload-demo">Drag and drop or click to browse.</label>
          <input id="upload-demo" type="file" accept=".png, .jpg" />
        </l-fileupload>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Form</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <fieldset>
          <label htmlFor="input">Label</label>
          <input id="input" type="text" />
        </fieldset>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          With message
        </h4>
        <fieldset>
          <label>Label</label>
          <input type="text" />
          <small>Form message</small>
        </fieldset>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Checkbox and Radio
        </h4>
        <form className="flex flex-col gap-4">
          <fieldset>
            <legend>Single with legend</legend>
            <input type="checkbox" checked onChange={() => {}} />
          </fieldset>
          <fieldset>
            <input type="checkbox" checked onChange={() => {}} />
            <label>Single with label</label>
          </fieldset>
          <fieldset>
            <div className="txt-smallest txt-darkblue-50 font-light mar-b-1">
              (No labels)
            </div>
            <input type="checkbox" checked onChange={() => {}} />
          </fieldset>
          <fieldset>
            <legend>Multiple inline</legend>
            <input type="checkbox" checked onChange={() => {}} />
            <label>Label</label>
            <input type="checkbox" onChange={() => {}} />
            <label>Label</label>
            <input type="checkbox" onChange={() => {}} />
            <label>Label</label>
          </fieldset>
          <fieldset>
            <legend>Multiple stacked</legend>
            <div>
              <input type="checkbox" checked onChange={() => {}} />
              <label>Label</label>
            </div>
            <div>
              <input type="checkbox" onChange={() => {}} />
              <label>Label</label>
            </div>
            <div>
              <input type="checkbox" onChange={() => {}} />
              <label>Label</label>
            </div>
          </fieldset>
        </form>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Validation</h4>
        <form className="flex">
          <fieldset>
            <label htmlFor="validation">Email</label>
            <input id="validation" type="email" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="minimum">Must be greater than 10</label>
            <input id="minimum" type="number" min="10" onChange={() => {}} />
          </fieldset>
        </form>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Kitchen Sink
        </h4>
        <form className="flex flex-col gap-4">
          <fieldset>
            <label htmlFor="text-demo">Text</label>
            <input id="text-demo" type="text" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="search-demo">Search</label>
            <input id="search-demo" type="search" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="email-demo">Email</label>
            <input id="email-demo" type="email" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="password-demo">Password</label>
            <input
              id="password-demo"
              type="password"
              value="secret"
              onChange={() => {}}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="number-demo">Number</label>
            <input id="number-demo" type="number" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="date-demo">Date</label>
            <input id="date-demo" type="date" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="time-demo">Time</label>
            <input id="time-demo" type="time" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="datetime-local-demo">Datetime</label>
            <input
              id="datetime-local-demo"
              type="datetime-local"
              onChange={() => {}}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="tel-demo">Phone</label>
            <input id="tel-demo" type="tel" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="url-demo">URL</label>
            <input id="url-demo" type="url" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="file-demo">File</label>
            <input id="file-demo" type="file" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <legend>Radio</legend>
            <input
              id="radio-demo"
              type="radio"
              name="radio"
              checked
              onChange={() => {}}
            />
            <label htmlFor="radio-demo">Label</label>
          </fieldset>
          <fieldset>
            <legend>Checkbox</legend>
            <input
              id="checkbox-demo"
              type="checkbox"
              name="checkbox"
              checked
              onChange={() => {}}
            />
            <label htmlFor="checkbox-demo">Label</label>
          </fieldset>
          <fieldset>
            <label htmlFor="range-demo">Range</label>
            <input id="range-demo" type="range" onChange={() => {}} />
          </fieldset>
          <fieldset>
            <label htmlFor="textall-demo">
              Label, placeholder, and message
            </label>
            <input
              id="textall-demo"
              type="text"
              placeholder="Placeholder"
              onChange={() => {}}
            />
            <small>Message</small>
          </fieldset>
          <fieldset>
            <label htmlFor="disabled-demo">Disabled</label>
            <input
              id="disabled-demo"
              type="text"
              value="value"
              disabled
              onChange={() => {}}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="readonly-demo">Readonly</label>
            <input
              id="readonly-demo"
              type="text"
              value="value"
              readOnly
              onChange={() => {}}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="textarea-demo">Textarea</label>
            <textarea
              id="textarea-demo"
              rows={5}
              onChange={() => {}}
              defaultValue="Initial height is determined by rows attribute. This example sets rows=5. Height is resizable."
            />
          </fieldset>
          <fieldset>
            <label htmlFor="select-demo">Select</label>
            <select id="select-demo">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="optgroup-demo">Select with groups</label>
            <select id="optgroup-demo">
              <optgroup label="Odds">
                <option value="1">One</option>
                <option value="3">Three</option>
                <option value="5">Five</option>
              </optgroup>
              <optgroup label="Evens">
                <option value="2">Two</option>
                <option value="4">Four</option>
                <option value="6">Six</option>
              </optgroup>
            </select>
          </fieldset>
          <fieldset>
            <label>Multiple inputs</label>
            <input type="text" placeholder="Street" onChange={() => {}} />
            <input type="text" placeholder="City" onChange={() => {}} />
            <select aria-label="States">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <input type="number" placeholder="Zip" onChange={() => {}} />
          </fieldset>
        </form>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Icon</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-icon name="user"></l-icon>
        <l-icon name="user" fill></l-icon>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Link</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <a href="https://xometry.com/">Xometry</a>
        <br />
        <a href="https://xometry.com/" kind="dark">
          Xometry
        </a>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Loader</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-loader kind="flow" role="progressbar"></l-loader>
        <l-loader kind="spinner" role="progressbar"></l-loader>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Pagination</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-pagination>
          <nav>
            <a href="/1">1</a>
            <a href="/2" aria-current="page">
              2
            </a>
            <a href="/3">3</a>
            <a href="/4">4</a>
            <a href="/5">5</a>
          </nav>
        </l-pagination>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>With angle</h4>
        <l-pagination>
          <nav>
            <a href="/1" role="button" kind="angle" direction="left"></a>
            <a href="/1">1</a>
            <a href="/2" aria-current="page">
              2
            </a>
            <a href="/3">3</a>
            <a href="/4">4</a>
            <a href="/5">5</a>
            <a href="/6">6</a>
            <a href="/3" role="button" kind="angle" direction="right"></a>
          </nav>
        </l-pagination>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>With Range</h4>
        <l-pagination>
          <div>11 - 20 of 57</div>
          <nav>
            <a href="/1" role="button" kind="angle" direction="left"></a>
            <a href="/1">1</a>
            <a href="/2" aria-current="page">
              2
            </a>
            <a href="/3">3</a>
            <a href="/4">4</a>
            <a href="/5">5</a>
            <a href="/6">6</a>
            <a href="/3" role="button" kind="angle" direction="right"></a>
          </nav>
        </l-pagination>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Panel</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-panel>Panel content</l-panel>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Progress</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <progress value="0" />
        <progress value="0.1" />
        <progress value="0.5" />
        <progress value="1" />
        <progress />
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Separator</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <hr />
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Skeleton</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-skeleton aria-busy="true"></l-skeleton>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Advanced</h4>
        <div style={{ display: 'flex', gap: 'var(--l-space-2)' }}>
          <l-skeleton
            aria-busy="true"
            style={{ width: '150px', height: '150px' }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--l-space-2)',
            }}
          >
            <l-skeleton
              aria-busy="true"
              style={{ width: '250px', height: 'var(--l-font-size-larger)' }}
            />
            <l-skeleton aria-busy="true" style={{ width: '100px' }} />
            <l-skeleton aria-busy="true" style={{ width: '100px' }} />
            <l-skeleton aria-busy="true" style={{ width: '100px' }} />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Switch</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <div className="flex flex-col gap-3">
          <input type="checkbox" role="switch" onChange={() => {}} />
          <input type="checkbox" role="switch" checked onChange={() => {}} />
          <input
            type="checkbox"
            role="switch"
            checked
            disabled
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Table</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>User</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Tabs</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <l-tabs role="tablist">
          <button role="tab" aria-selected="true">
            Tab 1
          </button>
          <button role="tab">Tab 2</button>
          <button role="tab">Tab 3</button>
        </l-tabs>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Typography</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Headings</h4>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Page Title</h4>
        <div className="txt-page-title">Page Title = Heading 1</div>

        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Normal Text</h4>
        <p>Semantic text elements help maximize SEO and accessibilty.</p>
        <blockquote>Blockquote</blockquote>
        <small>Small</small>

        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>
          Utility Classes
        </h4>
        <div className="txt-body">Body = Paragraph</div>
      </div>

      <div>
        <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Flex</h3>
        <h4 style={{ marginBottom: '20px', marginTop: '40px' }}>Basic</h4>
        <div className="flex flex-wrap gap-3" style={{ maxWidth: '300px' }}>
          <div className="brd radius-1 pad-5">A</div>
          <div className="brd radius-1 pad-5">B</div>
          <div className="brd radius-1 pad-5">C</div>
          <div className="brd radius-1 pad-5">D</div>
          <div className="brd radius-1 pad-5">E</div>
        </div>
      </div>
    </div>
  );
}
