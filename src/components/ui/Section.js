'use client';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Section = ({
  children,
  className = '',
  delay = 0,
  animate = true,
  as: Component = 'section',
  ...props
}) => {
  const content = (
    <Component
      className={`py-12 md:py-16 lg:py-20 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {content}
    </motion.div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  animate: PropTypes.bool,
  as: PropTypes.elementType,
};

export default Section;
