declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-container': any;
      'l-alert': any;
      'l-badge': any;
      'l-breadcrumbs': any;
      'l-chip': any;
      'l-dropdown': any;
      'l-filepreview': any;
      'l-fileupload': any;
      'l-icon': any;
      'l-loader': any;
      'l-pagination': any;
      'l-panel': any;
      'l-skeleton': any;
      'l-tabs': any;
    }

    interface ButtonHTMLAttributes<T> extends React.ButtonHTMLAttributes<T> {
      kind?: string;
      scale?: string;
    }

    interface DetailsHTMLAttributes<T> extends React.DetailsHTMLAttributes<T> {
      kind?: string;
    }

    interface DialogHTMLAttributes<T> extends React.DialogHTMLAttributes<T> {
      kind?: string;
    }

    interface AnchorHTMLAttributes<T> extends React.AnchorHTMLAttributes<T> {
      kind?: string;
      direction?: string;
    }
  }
}

export {};
