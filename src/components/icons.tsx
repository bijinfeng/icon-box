type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M200.789333 716.309333a42.666667 42.666667 0 0 1-21.333333-36.949333v-334.72a42.666667 42.666667 0 0 1 21.333333-36.949333L490.666667 140.309333a42.666667 42.666667 0 0 1 42.666666 0L844.544 320 512 512v384L200.789333 716.309333z"
        fill="currentColor" />
      <path
        d="M844.544 411.925333v267.434667a42.666667 42.666667 0 0 1-21.333333 36.949333L597.333333 846.72V554.666667l247.210667-142.741334z"
        fill="currentColor" />
    </svg>
  )
}
