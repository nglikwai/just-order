import { Button } from '@/components/components/ui/button';

export function OrderActions() {
  return (
    <div className='flex gap-3'>
      <Button
        variant='outline'
        onClick={() => window.history.back()}
        className='flex-1'
      >
        Back to Menu
      </Button>
      <Button
        onClick={() => window.location.reload()}
        className='flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'
      >
        Refresh Status
      </Button>
    </div>
  );
}
