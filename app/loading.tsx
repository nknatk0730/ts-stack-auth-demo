import { Loader2 } from 'lucide-react';

export default function loading() {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Loader2 className='h-8 w-8 animate-spin' />
    </div>
  )
}
