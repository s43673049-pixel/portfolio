import { useReveal } from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-editorial ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[18px]'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}