# Will do another project, this is just for documentation on how to use passport

# How to run

1. Fill in `.env` based on `env.example`

2. Create database corresponding to `POSTGRES_DB` variable

3. Run `npm run seed` to populate database

4. Run `npm run dev` for dev server

# Pages

1. Index **OK**

    - Links to login, sign up...

    - All Messages (only names and dates)

2. Login

3. Signup

    3.1 Hidden /admin-login route, needs admin password in `.env` to work

4. Clubs page

    - My clubs

        - Displayed by default in the page

        - Club creators can delete messages in their club

    - 4.1 Create club page

        - Add club name

        - Generates random password and stores in database
    
        - Form submit redirects to /clubs/:createdclubid

    - 4.2 Enter club page

        - Form for random password generated in club creation

        - Form submit redirects to /clubs/:enteredclubid

    - 4.3 Share club page

        - Just displays the password for joining a club

5. Club page

    - 5.1 New message page

6. Admin page (users, clubs) - Protected hidden route

    - Admin can delete messages anywhere

    - Admin has access to all groups

# Add design diagram for the app for future reference
