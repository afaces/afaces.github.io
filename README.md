# Create or log in into GitHub account
# Create repository named YOUR_ACCOUNT_NAME.github.io to create your github webpage repository.

<code>git clone https://github.com/YOUR_ACCOUNT_NAME/YOUR_ACCOUNT_NAME.github.io</code>

<code>git clone https://github.com/afaces/afaces.github.io</code>

<code>mv afaces.github.io YOUR_ACCOUNT_NAME.github.io</code>

# Generate buttons (first you need to edit with your own information about albums)
<code>bash create_song_buttons.sh</code>

## Substitute the buttons.md file content that comes out after running create_song_buttons.sh to your index.md

# Generate albums (first you need to edit with your own information about albums)
<code>bash create_navbar_player.sh</code>

## Substitute player.js track_list with the one generated in albums.json by create_navbar_player.sh

# Move files to .mp3
<code>move_to_mp3.sh</code>



# Link domain to github for pages to have custom web domain:

- Register a new domain name (https://www.freenom.com as example for '.tk' or https://www.000webhost.com for free domain registering)
- Redirect YOUR_DOMAIN_NAME.tk URL to YOUR_DOMAIN_NAME.github.io free https://redirect.pizza
- Set up inside GitHub's repository YOUR_DOMAIN_NAME.github.io set the domain the correspondant URL.

p. Ex: [afaces.tk](https://afaces.tk)



# Web Generated with Boostrap 4 for Github Pages

## Contribution

[See the contribution guide.](./CONTRIBUTING.md)

## Theme from bootswatch

#### Afaces
