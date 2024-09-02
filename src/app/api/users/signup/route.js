import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email } = reqBody;

    // Validation
    console.log(reqBody);

    // Check if the user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }

    // Create and save new user
    const newUser = new User({
      email,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    // Send verification email
    await sendEmail({ email, userId: savedUser._id });

    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    // Log detailed error information
    console.error("Error during user registration:", error);

    return NextResponse.json(
      {
        error: error.message || "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
