import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>PN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Petero Nzukira</p>
          <p className="text-sm text-muted-foreground">pnzukira@email.com</p>
        </div>
        <div className="ml-auto font-medium">+57,999.00 RWF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jean Sebyondo</p>
          <p className="text-sm text-muted-foreground">jsebyondo@email.com</p>
        </div>
        <div className="ml-auto font-medium">+39,000.00 RWF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>II</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Isimbi</p>
          <p className="text-sm text-muted-foreground">
            isabella.isimbi@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+299,000.00 RWF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>BM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Bertrand Manzi</p>
          <p className="text-sm text-muted-foreground">
            bertrand.manzi@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+99,000.00 RWF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Mutesi</p>
          <p className="text-sm text-muted-foreground">
            sofia.mutesi@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+39,000.00 RWF</div>
      </div>
    </div>
  );
}
