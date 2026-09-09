#!/usr/bin/perl
# テンプレート内の @@IMG:相対パス@@ を base64 data URI に置換して書き出す
use strict;
use warnings;
use MIME::Base64 ();

my ($tpl, $out) = @ARGV;
open my $in, '<:raw', $tpl or die "$tpl: $!";
my $html = do { local $/; <$in> };
close $in;

my %cache;
$html =~ s{\@\@IMG:([^@]+)\@\@}{
    my $p = $1;
    my $mime = ($p =~ /\.png$/i) ? 'image/png' : 'image/jpeg';
    $cache{$p} //= do {
        open my $f, '<:raw', $p or die "$p: $!";
        my $d = do { local $/; <$f> };
        close $f;
        'data:' . $mime . ';base64,' . MIME::Base64::encode_base64($d, '');
    };
    $cache{$p};
}ge;

open my $o, '>:raw', $out or die "$out: $!";
print $o $html;
close $o;
print "wrote $out (", -s $out, " bytes)\n";
