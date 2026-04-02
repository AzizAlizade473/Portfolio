// Inline SVG icons — replaces react-icons to eliminate ~100KB from bundle
// Each icon is a tiny component accepting size, className, style props

export function IconGithub({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

export function IconLinkedin({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function IconMail({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function IconArrowDown({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} {...props}>
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

export function IconArrowUpRight({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

export function IconMenu({ size = 24, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} {...props}>
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  )
}

export function IconX({ size = 24, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} {...props}>
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

export function IconAward({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  )
}

export function IconHeart({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

export function IconBriefcase({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} {...props}>
      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    </svg>
  )
}

export function IconAcademicCap({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} {...props}>
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3.001z" /><path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  )
}

// Tech skill icons (simplified solid icons)
export function IconPython({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.348-3.403h5.766s3.24.052 3.24-3.133V3.15S18.28 0 11.914 0zM8.708 1.82a1.042 1.042 0 110 2.085 1.042 1.042 0 010-2.085z" />
      <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.348 3.403H9.453s-3.24-.052-3.24 3.133v5.376S5.72 24 12.086 24zm3.206-1.82a1.042 1.042 0 110-2.085 1.042 1.042 0 010 2.085z" />
    </svg>
  )
}

export function IconCpp({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
    </svg>
  )
}

export function IconReact({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <circle cx="12" cy="11.245" r="2.103" />
      <path d="M12 6.862c3.181 0 6.028.573 8.118 1.527C22.088 9.28 23.5 10.6 23.5 11.245c0 .672-1.494 2.07-3.576 2.964-2.07.89-4.876 1.44-7.924 1.44-3.15 0-5.94-.53-8.023-1.43C1.89 13.31.5 11.95.5 11.245c0-.672 1.326-1.928 3.37-2.828C5.915 7.44 8.776 6.862 12 6.862z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8.363 9.053c1.59-2.757 3.61-4.966 5.552-6.14C15.802 1.97 17.5 1.558 18.162 1.94c.69.398.953 2.092.477 4.456-.473 2.348-1.678 5.163-3.313 7.995-1.592 2.758-3.532 5.042-5.455 6.2-1.916 1.154-3.65 1.46-4.34 1.063-.66-.383-.907-1.965-.48-4.24.442-2.35 1.72-5.274 3.312-8.36z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8.363 13.437c-1.59-2.757-2.87-5.68-3.312-8.03-.427-2.275-.18-3.856.48-4.24.688-.397 2.386.01 4.282 1.146 1.886 1.13 3.91 3.324 5.5 6.082 1.636 2.831 2.84 5.647 3.314 7.995.476 2.364.213 4.058-.477 4.456-.66.382-2.27.065-4.16-1.075-1.944-1.174-4.036-3.477-5.627-6.334z" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function IconTypeScript({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.42.276.69.394c.268.118.58.232.936.34.48.144.904.303 1.27.478.37.174.686.377.936.609.25.232.44.499.573.801.133.302.2.65.2 1.044 0 .546-.105 1-.314 1.364-.21.363-.5.657-.873.882a3.685 3.685 0 0 1-1.27.49 6.502 6.502 0 0 1-1.497.16c-.634 0-1.228-.066-1.78-.2a5.794 5.794 0 0 1-1.455-.55v-2.656a4.257 4.257 0 0 0 .8.535 5.695 5.695 0 0 0 1.798.581c.217.04.432.06.645.06.398 0 .72-.06.966-.177a.619.619 0 0 0 .299-.525.655.655 0 0 0-.17-.453 1.766 1.766 0 0 0-.494-.383 5.78 5.78 0 0 0-.764-.35 14.055 14.055 0 0 0-.996-.377 5.502 5.502 0 0 1-1.137-.543 3.002 3.002 0 0 1-.762-.692 2.44 2.44 0 0 1-.428-.835 3.318 3.318 0 0 1-.134-.976c0-.527.115-.98.346-1.36.23-.381.536-.695.914-.94a4.26 4.26 0 0 1 1.307-.555 5.895 5.895 0 0 1 1.494-.182zM11.649 9.904H4.944v2.082H7.39v7.164h2.604v-7.164h2.655z" />
    </svg>
  )
}

export function IconHtml({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.076-.956.076-.956.152-1.809H6.292l.698 7.917h7.251l-.264 3.163-1.977.529-1.986-.531-.133-1.478h-2.86l.229 2.869L12 17.937l3.451-.94.543-6.498H8.531z" />
    </svg>
  )
}

export function IconJava({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.762.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.009.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.569 2.082-1.006 3.776-.891 3.776-.891M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627M9.734 23.924c4.322.277 10.959-.154 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
    </svg>
  )
}

export function IconJavaScript({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  )
}

export function IconTensorflow({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-3.244 1.867v5.47L1.292 13.1V5.856zm21.416 0L12.46 0v24l4.095-2.378V14.67l3.245 1.867v-5.47L22.708 13.1V5.856zM12.46 8.298l3.245 1.867v3.736l-3.245-1.868z" />
    </svg>
  )
}

export function IconChart({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} style={style} {...props}>
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    </svg>
  )
}
