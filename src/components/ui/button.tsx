type ButtonProps = {
    className?: string
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
    size?: 'default' | 'sm' | 'lg'
    children: React.ReactNode
}
// test
export function Button({
    className = '',
    variant = 'default',
    size = 'default',
    children,
    ...props
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground"
    }

    const sizes = {
        default: "h-9 px-4 py-2 text-base",
        sm: "h-8 rounded-md px-3 text-sm",
        lg: "h-10 rounded-md px-6 text-xl"
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
