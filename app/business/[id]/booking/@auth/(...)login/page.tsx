import LoginForm from "@/(auth)/_components/login-form";
import { Button } from "@/ui/components/button";
import { Dialog, DialogFooter, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/ui/components/dialog";

export default function LoginModal() {
    return <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                    Please login to continue
                </DialogDescription>
            </DialogHeader>
            <LoginForm />
            <DialogFooter>
                <Button>Login</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

}