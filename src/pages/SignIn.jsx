import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-md w-72 lg:w-96">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </CardFooter>
        <div className="pb-5 mt-4 text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to="/sign-up" className="underline">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
