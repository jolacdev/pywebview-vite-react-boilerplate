type LoaderProps = {
  isFullscreen?: boolean;
};

const Loader = ({ isFullscreen = false }: LoaderProps) => (
  <div
    className={
      isFullscreen
        ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        : 'flex items-center justify-center h-full w-full'
    }
  >
    <div className="animate-spin size-10 rounded-full border-3 border-current border-t-transparent text-green-700" />
  </div>
);

export default Loader;
